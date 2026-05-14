import path from "path";
import os from "os";
import fs from "fs";
import { fileURLToPath } from "url";
import { match } from "assert";

//importar a url do arquivo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const relativePath = "../arquivo/relatorio.pdf";

//.join junta os elementos passados como parametro uns aos outros e resolvoe ja busca o diretorio automaticamente e junta com o q foi passado no parametro
const fullPath = path.join(__dirname);
const absolutePath = path.resolve(relativePath);

//extname para pegar o tipo da extensao do arquivo
const ext = path.extname(absolutePath);

// MODULO OS

const systemPlatformMap = {
  win32: "Windows",
  linux: "Linux",
  darwin: "MacOS",
  freebsd: "FreeBSD",
};

function getSystemInfo() {
  const system = systemPlatformMap[os.platform()];
  const arch = os.arch();
  const cpu = os.cpus()[0].model;

  const uptimeDays = Math.floor(os.uptime() / 60 / 60 / 24);
  const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60;

  const uptimeHours = Math.floor((os.uptime() - uptimeDaysInSeconds) / 60 / 60);
  const uptimeHoursInSeconds = uptimeHours * 60 * 60;

  const uptimeMins = Math.floor(
    (os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60,
  );
  const uptimeMinsInSeconds = uptimeMins * 60;

  const uptimeSecs = Math.floor(
    os.uptime() -
      uptimeDaysInSeconds -
      uptimeHoursInSeconds -
      uptimeMinsInSeconds,
  );

  const uptime = `${uptimeDays}:${uptimeHours}:${uptimeMins}:${uptimeSecs}`;

  const ramTotal = os.totalmem() / 1024 / 1024 / 1024;
  const ramUsage = (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024;
  const ramUsagePercent = Math.round((ramUsage / ramTotal) * 100);

  return { system, arch, cpu, uptime, ramUsage, ramTotal, ramUsagePercent };
}

function printLog({
  system,
  arch,
  cpu,
  uptime,
  ramUsage,
  ramTotal,
  ramUsagePercent,
}) {
  console.clear();
  console.log("Detalhes do sistema");
  console.log("Sistema operacional:", system);
  console.log("Arquitetura do SO: ", arch);
  console.log("total de memoria do pc:", ramTotal / 1024 / 1024 / 1024, "GB");
  console.log("Porcentagem de memoria em uso :", ramUsagePercent, "%");
  console.log("Tempo de atividade do sistema", uptime);
  console.log(
    `Uso de Memória RAM: ${ramUsage.toFixed(2)} GB / ${ramTotal.toFixed(2)} GB (${ramUsagePercent} %)`,
  );
  console.log("Informaçoes da CPU", cpu);
}

function saveLog({
  system,
  arch,
  cpu,
  uptime,
  ramUsage,
  ramTotal,
  ramUsagePercent,
}) {
  const logContent = `DETALHES DO SISTEMA | Sistema Operacional: ${system} | Arquitetura: ${arch} | Modelo do Processador: ${cpu} | Tempo de Atividade do Sistema: ${uptime} | Uso de Memória RAM: ${ramUsage.toFixed(2)} GB / ${ramTotal.toFixed(2)} GB (${ramUsagePercent} %)\n---\n`;

  const fileDir = __filename;
  const logDir = path.join(os.homedir(), "logs");

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
  }

  const logFilePath = path.join(logDir, "log.txt");
  fs.appendFileSync(logFilePath, logContent);
}

setInterval(() => {
  const systemInfo = getSystemInfo();
  printLog(systemInfo);
  saveLog(systemInfo);
}, 1000);
