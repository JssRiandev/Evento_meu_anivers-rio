AOS.init();

const data_evento= new Date("May 03, 2024 19:00:00");
const time_stamp_evento= data_evento.getTime();

const conta_horas = setInterval(function(){
    const agora = new Date();
    const time_stamp_atual= agora.getTime();

    const tempo_para_evento = time_stamp_evento - time_stamp_atual;

    const mes_em_ms= 1000 * 60 * 60 * 24* 30;
    const dia_em_ms= 1000 * 60 * 60 * 24;
    const hora_em_ms= 1000 * 60 * 60;
    const min_em_ms = 1000*60;

    const meses_para_evento = Math.floor(tempo_para_evento / mes_em_ms);
    const dias_para_evento = Math.floor((tempo_para_evento % mes_em_ms) / dia_em_ms);
    const horas_para_evento = Math.floor((tempo_para_evento % dia_em_ms) / hora_em_ms);
    const min_para_evento = Math.floor((tempo_para_evento % hora_em_ms / min_em_ms));
    const seg_para_evento = Math.floor((tempo_para_evento % min_em_ms)/1000);

    console.log(meses_para_evento);
    console.log(dias_para_evento);
    console.log(horas_para_evento);
    console.log(min_para_evento);
    console.log(seg_para_evento);

    document.getElementById('contador').innerHTML =`${meses_para_evento}m ${dias_para_evento}d ${horas_para_evento}h ${min_para_evento}min ${seg_para_evento}s`;

    if(meses_para_evento <0){
        clearInterval(conta_horas);
        document.getElementById('contador').innerHTML = ": evento expirado";
    }
},1000);