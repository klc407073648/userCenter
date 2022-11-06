
deploy_container_list='user-center-frontend user-center-backend'
image_tar='v0.0.1'
suf_fix='0'

curPath=`pwd`

function cleanImage() 
{
  echo "cleanImage begin"

  for container_name in $deploy_container_list; do
    docker rmi ${container_name}:${image_tar}
  done

  echo "cleanImage end"
}
function cleanRunContainer() 
{
  echo "cleanRunContainer begin"

  echo "deploy_container_list:[${deploy_container_list}]"

  sum=0
  for container_name in $deploy_container_list; do
    cnt=`docker ps -a | grep $container_name | wc -l`
    if [ "$cnt"x = "1"x ]; then
      sum=`expr $sum + $cnt`
      docker stop ${container_name}_${suf_fix}
      echo "docker stop $container_name"
    fi
  done

  if [ "$sum"x != "0"x ]; then
    docker rm $(docker ps -q -f status=exited)
  fi

  echo "cleanRunContainer end"
}

function RunBuild() 
{
  echo "RunBuild begin"

	# 前端
	cd ${curPath}/../frontend/
	docker build -t user-center-frontend:${image_tar} .
	docker run -p 81:80 -d --name user-center-frontend_${suf_fix} user-center-frontend:${image_tar}

	# 后端
	cd ${curPath}/../backend/
	docker build -t user-center-backend:${image_tar} .
	docker run -p 8081:8080 -d  --name user-center-backend_${suf_fix} user-center-backend:${image_tar}

  echo "RunBuild end"
}

function MAIN()
{
	cleanRunContainer
	cleanImage
	RunBuild
}

MAIN