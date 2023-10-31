declare var process: Process;

interface Process {
  env: Env
}

interface Env {
  TOKEN: string
}

interface GlobalEnviroment {
  process: Process
}
