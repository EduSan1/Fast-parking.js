const reports = async () => {

    const verificationDate = (date) => {
        if (date <10) {
            return "0" + date
        }else 
            return date
    }

    const now = new Date
    let dataInicioSemanal = ""    
    const mesAtual = verificationDate(now.getMonth() +1)
    const lastYear = now.getFullYear() - 1
    const diaAtual = verificationDate(now.getDate())

    if (now.getDate() < 8) {

        let cont = now.getDate()
        let MesInicio = now.getMonth()
        const AnoInicio = now.getFullYear()

        for (let index = 7; index > 0; index--) {
            cont -= 1
        }
        let diaInicio = 30 + cont

        dataInicioSemanal = AnoInicio + "-" + verificationDate(MesInicio) + "-" + verificationDate(diaInicio)
        console.log(dataInicioSemanal)

    } else {
        let diaInicio = now.getDate() - 7
        let MesInicio = now.getMonth() + 1
        const AnoInicio = now.getFullYear()

        dataInicioSemanal = AnoInicio + "-" + verificationDate(MesInicio) + "-" + verificationDate(diaInicio)
        console.log(dataInicioSemanal)
    }

    const intervalWeekly = {
        "dataInicio" : dataInicioSemanal,
        "dataFim" : now.getFullYear()+ "-" + mesAtual + "-" + diaAtual
    }
    
    const intervalMonthly = {
        "dataInicio" : now.getFullYear()+ "-" + verificationDate(now.getMonth()) + "-" + diaAtual ,
        "dataFim" : now.getFullYear()+ "-" + mesAtual + "-" + diaAtual
    }

    const intervalYearly = {
        "dataInicio" : lastYear + "-" + mesAtual + "-" + diaAtual ,
        "dataFim" : now.getFullYear()+ "-" + mesAtual + "-" + diaAtual 
    }

    const getInterval = async ( dataInicio , dataFim ) => {

        const url = "http://localhost/estacionamento/projetoEstacionamento/api/registros/relatorio/" + dataInicio + "/" + dataFim;
        const response = await fetch(url);
        const data = await response.json();
        return data

    }

    const reportWeek = await getInterval(intervalWeekly.dataInicio, intervalWeekly.dataFim)
    const reportMonth = await getInterval(intervalMonthly.dataInicio, intervalMonthly.dataFim)
    const reportYear = await getInterval(intervalYearly.dataInicio, intervalYearly.dataFim)

    const profitWeek = document.getElementById("profitWeek")
    const profitMonth = document.getElementById("profitMonth")
    const profitYear = document.getElementById("profitYear")
    const enterWeek = document.getElementById("enterWeek")
    const enterMonth = document.getElementById("enterMonth")
    const enterYear = document.getElementById("enterYear")

    enterWeek.textContent = `${reportWeek[0].veiculosEstacionados}`
    enterMonth.textContent = `${reportMonth[0].veiculosEstacionados}`
    enterYear.textContent = ` ${reportYear[0].veiculosEstacionados}`
    profitWeek.textContent = `${reportWeek[0].valorTotal}`
    profitMonth.textContent = `${reportMonth[0].valorTotal}`
    profitYear.textContent = ` ${reportYear[0].valorTotal}`
};

export { reports };


