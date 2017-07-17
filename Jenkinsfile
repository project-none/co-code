pipeline {
  agent any
  stages {
    stage('MEOW') {
      steps {
        parallel(
          "1": {
            echo 'hello1'
            
          },
          "2": {
            echo 'hello2'
            
          },
          "3": {
            echo 'hello3'
            
          }
        )
      }
    }
    stage('End') {
      steps {
        echo 'end'
      }
    }
  }
}
