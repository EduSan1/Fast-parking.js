const reportWeek =
{
    totalCarros: 200,
    valorTotal: 1500.0
};

const reportMonth =
{
    totalCarros: 400,
    valorTotal: 12312421.0
};

const reportYear =
{
    totalCarros: 1243214,
    valorTotal: 3000000.0
};

const reports = () => {

    const now = new Date
    let dataInicioSemanal = ""    
    const mesAtual = now.getMonth() +1
    const lastYear = now.getFullYear() - 1

    if (now.getDate() < 8) {

        let cont = now.getDate()
        const MesInicio = now.getMonth()
        const AnoInicio = now.getFullYear()

        for (let index = 7; index > 0; index--) {
            cont -= 1
        }
        const diaInicio = 30 + cont

        dataInicioSemanal = AnoInicio + "-" + MesInicio + "-" + diaInicio

    } else {
        const diaInicio = now.getDate() - 7
        const MesInicio = now.getMonth() + 1
        const AnoInicio = now.getFullYear()

        dataInicioSemanal = AnoInicio + "-" + MesInicio + "-" + diaInicio

    }

    const getIntervalSemanal = {
        "dataInicio" : dataInicioSemanal,
        "dataFim" : now.getFullYear()+ "-" + mesAtual + "-" + now.getDate() 
    }

    const getIntervalMensal = {
        "dataInicio" : now.getFullYear()+ "-" + now.getMonth() + "-" + now.getDate() ,
        "dataFim" : now.getFullYear()+ "-" + mesAtual + "-" + now.getDate() 
    }

    const getIntervalAnual = {
        "dataInicio" : lastYear + "-" + now.getMonth() + "-" + now.getDate() ,
        "dataFim" : now.getFullYear()+ "-" + mesAtual + "-" + now.getDate() 
    }

    const profitWeek = document.getElementById("profitWeek")
    const profitMonth = document.getElementById("profitMonth")
    const profitYear = document.getElementById("profitYear")
    const enterWeek = document.getElementById("enterWeek")
    const enterMonth = document.getElementById("enterMonth")
    const enterYear = document.getElementById("enterYear")

    enterWeek.textContent = `${reportWeek.totalCarros}`
    enterMonth.textContent = `${reportMonth.totalCarros}`
    enterYear.textContent = ` ${reportYear.totalCarros}`
    profitWeek.textContent = `${reportWeek.valorTotal}`
    profitMonth.textContent = `${reportMonth.valorTotal}`
    profitYear.textContent = ` ${reportYear.valorTotal}`
};

export { reports };


