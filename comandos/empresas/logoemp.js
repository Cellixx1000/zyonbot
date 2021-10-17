const {
    MessageEmbed
} = require('discord.js')
const firebase = require('firebase')
const database = firebase.database()
const config = require('../../config.json')

module.exports = {
    run: async function (client, message, args) {
        try {
            //<!-- Coletamos o prefixo do servidor --!>
            let prefixoColeta = await database.ref(`Configurações/Servidores/${message.guild.id}/Prefixo`)
            let prefixoColeta2 = await prefixoColeta.once('value')
            let prefixo = prefixoColeta2.val().prefixo
            //<!-- Coletamos os dados do servidor --!>
            let ref = await database.ref(`Economia/Servidor/${message.guild.id}/Registros/Usuário/${message.author.id}`)
            let snap = await ref.once('value')
            //<!-- Se os dados não existirem, o Zyon vai criá-los --!>
            if (snap.val() == null) {
                return message.channel.send(`<a:erro:809516073799122945> | Olá ${message.author}, por gentileza, utilize o comando \`${prefixo}registrar\` e use o comando de novo!`)
            }
            if(args[0] == "1") {
            let coletaEmpresa1 = await database.ref(`Economia/Servidor/${message.guild.id}/Empresas/Empresa 01`)
            let coletaEmpresa = await coletaEmpresa1.once('value')
            let Empresas = coletaEmpresa.val()
            if (Empresas.usuario != message.author.id) {
                return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, você não é dono da empresa **\`${Empresas.nome}\`**!`)
            }
            const descricao = args.splice(1).join(" ")
            if (!descricao) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, digite um link do imgur ou qualquer outra hospedagem de imagens!\n• Uso correto: \`${prefixo}logoemp <id> <link.png>\``)
            //if (descricao.length > 60) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, você utilizou na descrição da sua empresa **${descricao.length}** caracteres, você deve usar apenas **60**. Reduza e tente novamente!`)
            //if (descricao.length < 10) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, adicione pelo menos **10** caracteres, você usou apenas **${descricao.length}**.`)
            else {
                database.ref(`Economia/Servidor/${message.guild.id}/Empresas/Empresa 01`)
                .update({
                    "imagem": `${descricao}`
                })
                message.channel.send(`<:trix_certo:719330454930587689> | **${message.author.username}**, a logotipo da sua empresa foi atualizada com sucesso. Verifique utilizando \`${prefixo}infoemp <id>\`!`)
            }
        }
        if(args[0] == "2") {
            let coletaEmpresa1 = await database.ref(`Economia/Servidor/${message.guild.id}/Empresas/Empresa 02`)
            let coletaEmpresa = await coletaEmpresa1.once('value')
            let Empresas = coletaEmpresa.val()
            if (Empresas.usuario != message.author.id) {
                return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, você não é dono da empresa **\`${Empresas.nome}\`**!`)
            }
            const descricao = args.splice(1).join(" ")
            if (!descricao) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, digite um link do imgur ou qualquer outra hospedagem de imagens!\n• Uso correto: \`${prefixo}logoemp <id> <link.png>\``)
            //if (descricao.length > 60) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, você utilizou na descrição da sua empresa **${descricao.length}** caracteres, você deve usar apenas **60**. Reduza e tente novamente!`)
            //if (descricao.length < 10) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, adicione pelo menos **10** caracteres, você usou apenas **${descricao.length}**.`)
            else {
                database.ref(`Economia/Servidor/${message.guild.id}/Empresas/Empresa 02`)
                .update({
                    "imagem": `${descricao}`
                })
                message.channel.send(`<:trix_certo:719330454930587689> | **${message.author.username}**, a logotipo da sua empresa foi atualizada com sucesso. Verifique utilizando \`${prefixo}infoemp <id>\`!`)
            }
        }
        if(args[0] == "2") {
            let coletaEmpresa1 = await database.ref(`Economia/Servidor/${message.guild.id}/Empresas/Empresa 02`)
            let coletaEmpresa = await coletaEmpresa1.once('value')
            let Empresas = coletaEmpresa.val()
            if (Empresas.usuario != message.author.id) {
                return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, você não é dono da empresa **\`${Empresas.nome}\`**!`)
            }
            const descricao = args.splice(1).join(" ")
            if (!descricao) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, digite um link do imgur ou qualquer outra hospedagem de imagens!\n• Uso correto: \`${prefixo}logoemp <id> <link.png>\``)
            //if (descricao.length > 60) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, você utilizou na descrição da sua empresa **${descricao.length}** caracteres, você deve usar apenas **60**. Reduza e tente novamente!`)
            //if (descricao.length < 10) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, adicione pelo menos **10** caracteres, você usou apenas **${descricao.length}**.`)
            else {
                database.ref(`Economia/Servidor/${message.guild.id}/Empresas/Empresa 02`)
                .update({
                    "imagem": `${descricao}`
                })
                message.channel.send(`<:trix_certo:719330454930587689> | **${message.author.username}**, a logotipo da sua empresa foi atualizada com sucesso. Verifique utilizando \`${prefixo}infoemp <id>\`!`)
            }
        }
        if(args[0] == "3") {
            let coletaEmpresa1 = await database.ref(`Economia/Servidor/${message.guild.id}/Empresas/Empresa 03`)
            let coletaEmpresa = await coletaEmpresa1.once('value')
            let Empresas = coletaEmpresa.val()
            if (Empresas.usuario != message.author.id) {
                return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, você não é dono da empresa **\`${Empresas.nome}\`**!`)
            }
            const descricao = args.splice(1).join(" ")
            if (!descricao) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, digite um link do imgur ou qualquer outra hospedagem de imagens!\n• Uso correto: \`${prefixo}logoemp <id> <link.png>\``)
            //if (descricao.length > 60) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, você utilizou na descrição da sua empresa **${descricao.length}** caracteres, você deve usar apenas **60**. Reduza e tente novamente!`)
            //if (descricao.length < 10) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, adicione pelo menos **10** caracteres, você usou apenas **${descricao.length}**.`)
            else {
                database.ref(`Economia/Servidor/${message.guild.id}/Empresas/Empresa 03`)
                .update({
                    "imagem": `${descricao}`
                })
                message.channel.send(`<:trix_certo:719330454930587689> | **${message.author.username}**, a logotipo da sua empresa foi atualizada com sucesso. Verifique utilizando \`${prefixo}infoemp <id>\`!`)
            }
        }
        if(args[0] == "4") {
            let coletaEmpresa1 = await database.ref(`Economia/Servidor/${message.guild.id}/Empresas/Empresa 04`)
            let coletaEmpresa = await coletaEmpresa1.once('value')
            let Empresas = coletaEmpresa.val()
            if (Empresas.usuario != message.author.id) {
                return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, você não é dono da empresa **\`${Empresas.nome}\`**!`)
            }
            const descricao = args.splice(1).join(" ")
            if (!descricao) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, digite um link do imgur ou qualquer outra hospedagem de imagens!\n• Uso correto: \`${prefixo}logoemp <id> <link.png>\``)
            //if (descricao.length > 60) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, você utilizou na descrição da sua empresa **${descricao.length}** caracteres, você deve usar apenas **60**. Reduza e tente novamente!`)
            //if (descricao.length < 10) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, adicione pelo menos **10** caracteres, você usou apenas **${descricao.length}**.`)
            else {
                database.ref(`Economia/Servidor/${message.guild.id}/Empresas/Empresa 04`)
                .update({
                    "imagem": `${descricao}`
                })
                message.channel.send(`<:trix_certo:719330454930587689> | **${message.author.username}**, a logotipo da sua empresa foi atualizada com sucesso. Verifique utilizando \`${prefixo}infoemp <id>\`!`)
            }
        }
        if(args[0] == "5") {
            let coletaEmpresa1 = await database.ref(`Economia/Servidor/${message.guild.id}/Empresas/Empresa 05`)
            let coletaEmpresa = await coletaEmpresa1.once('value')
            let Empresas = coletaEmpresa.val()
            if (Empresas.usuario != message.author.id) {
                return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, você não é dono da empresa **\`${Empresas.nome}\`**!`)
            }
            const descricao = args.splice(1).join(" ")
            if (!descricao) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, digite um link do imgur ou qualquer outra hospedagem de imagens!\n• Uso correto: \`${prefixo}logoemp <id> <link.png>\``)
            //if (descricao.length > 60) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, você utilizou na descrição da sua empresa **${descricao.length}** caracteres, você deve usar apenas **60**. Reduza e tente novamente!`)
            //if (descricao.length < 10) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, adicione pelo menos **10** caracteres, você usou apenas **${descricao.length}**.`)
            else {
                database.ref(`Economia/Servidor/${message.guild.id}/Empresas/Empresa 05`)
                .update({
                    "imagem": `${descricao}`
                })
                message.channel.send(`<:trix_certo:719330454930587689> | **${message.author.username}**, a logotipo da sua empresa foi atualizada com sucesso. Verifique utilizando \`${prefixo}infoemp <id>\`!`)
            }
        }
        if(args[0] == "6") {
            let coletaEmpresa1 = await database.ref(`Economia/Servidor/${message.guild.id}/Empresas/Empresa 06`)
            let coletaEmpresa = await coletaEmpresa1.once('value')
            let Empresas = coletaEmpresa.val()
            if (Empresas.usuario != message.author.id) {
                return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, você não é dono da empresa **\`${Empresas.nome}\`**!`)
            }
            const descricao = args.splice(1).join(" ")
            if (!descricao) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, digite um link do imgur ou qualquer outra hospedagem de imagens!\n• Uso correto: \`${prefixo}logoemp <id> <link.png>\``)
            //if (descricao.length > 60) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, você utilizou na descrição da sua empresa **${descricao.length}** caracteres, você deve usar apenas **60**. Reduza e tente novamente!`)
            //if (descricao.length < 10) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, adicione pelo menos **10** caracteres, você usou apenas **${descricao.length}**.`)
            else {
                database.ref(`Economia/Servidor/${message.guild.id}/Empresas/Empresa 06`)
                .update({
                    "imagem": `${descricao}`
                })
                message.channel.send(`<:trix_certo:719330454930587689> | **${message.author.username}**, a logotipo da sua empresa foi atualizada com sucesso. Verifique utilizando \`${prefixo}infoemp <id>\`!`)
            }
        }
        if(args[0] == "7") {
            let coletaEmpresa1 = await database.ref(`Economia/Servidor/${message.guild.id}/Empresas/Empresa 07`)
            let coletaEmpresa = await coletaEmpresa1.once('value')
            let Empresas = coletaEmpresa.val()
            if (Empresas.usuario != message.author.id) {
                return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, você não é dono da empresa **\`${Empresas.nome}\`**!`)
            }
            const descricao = args.splice(1).join(" ")
            if (!descricao) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, digite um link do imgur ou qualquer outra hospedagem de imagens!\n• Uso correto: \`${prefixo}logoemp <id> <link.png>\``)
            //if (descricao.length > 60) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, você utilizou na descrição da sua empresa **${descricao.length}** caracteres, você deve usar apenas **60**. Reduza e tente novamente!`)
            //if (descricao.length < 10) return message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, adicione pelo menos **10** caracteres, você usou apenas **${descricao.length}**.`)
            else {
                database.ref(`Economia/Servidor/${message.guild.id}/Empresas/Empresa 07`)
                .update({
                    "imagem": `${descricao}`
                })
                message.channel.send(`<:trix_certo:719330454930587689> | **${message.author.username}**, a logotipo da sua empresa foi atualizada com sucesso. Verifique utilizando \`${prefixo}infoemp <id>\`!`)
            }
        }
        } catch (e) {
            const erroCanal = client.channels.get('733875381131673661')
            message.channel.send(`<a:erro:809516073799122945> | **${message.author.username}**, encontrei um erro neste comando e minha equipe foi acionada!`)
            erroCanal.send(`**Erro encontrado:**\n\`${e}\`\n• Servidor: ${message.guild.name} (${message.guild.id})\n• Comando: \`\``)
        }
    },
    conf: {},
    get help() {
        return {
            name: 'logoemp'
        }
    }
}