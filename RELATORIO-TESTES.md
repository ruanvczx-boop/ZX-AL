# Relatório de entrega — Presente da Laura

## Testes realizados no pacote
- `index.html` foi analisado com parser HTML do Python: passou sem erro de parsing.
- JavaScript inline foi extraído e verificado com `node --check`: passou sem erro de sintaxe.
- Todos os caminhos locais usados por `src` e `data-photo` foram verificados: nenhum arquivo local referenciado está faltando.
- `trilha-original.wav` existe no pacote (1.234.844 bytes).
- A declaração final foi comparada com o texto solicitado: correspondência exata, incluindo a assinatura.
- O ZIP foi reaberto e testado: integridade aprovada (`testzip` sem erro).

## Não testado
- Não foi executado em navegador real, Android/iOS ou desktop.
- Não foi possível confirmar a reprodução efetiva dos embeds externos (Spotify, YouTube/TMCBlog e Wikimedia Commons) em cada região/navegador.
- Não foi feita publicação nem commit no GitHub Pages; o repositório remoto não foi alterado.
- Não foi possível validar tempos de carregamento em rede móvel.

## Arquivos modificados / preparados
- `index.html`: mantém as seções existentes do HTML disponível; habilita a trilha de piano local; adiciona controle compartilhado para pausar a trilha ao iniciar um motor; mantém um único canal de áudio para os sons automotivos; exibe somente os quatro veículos que possuem fotografias correspondentes (Mazda RX-7, Supra MK4, Skyline R34 e Yamaha YZF-R15); removeu os cartões-placeholder do Charger e da segunda moto, sem alterar as demais seções.

## Arquivos incluídos / novos
- `trilha-original.wav`: arquivo de piano fornecido no ambiente.
- `bts-laura.jpg`: imagem BTS recebida.
- `168813.jpg`, `168814.jpg`, `168816.jpg`, `168352.jpg`: quatro imagens da Ayasha, a partir das fotografias recebidas.
- `skyline-r34.jpg`, `mazda-rx7-reference.jpg`, `supra-mk4.jpg`, `yamaha-r15.jpg`: fotografias de veículos recebidas e organizadas por referência.
- `assets/originais-recebidos/`: cópias dos nove JPGs recebidos, mantendo seus nomes originais.
- `CREDITOS.md`: créditos, licenças e limitações dos áudios externos.
- `README.md`: instruções atuais e pendências.
- `LEIA-ME.txt` e `LEIA-ME-MOTORES.txt`: documentação preservada/adaptada a partir dos arquivos informativos do repositório público.
- `RELATORIO-TESTES.md`: este relatório.

## Pendências de conteúdo
- Dodge Charger R/T 1970 e segunda moto não aparecem na galeria porque não havia fotografias correspondentes separadas nos arquivos recebidos.
- Não foi disponibilizada uma gravação verificada do Charger nem da segunda moto.
- Os sons de Mazda, Supra e Skyline são reproduzidos a partir de links externos; não foram baixados nem incorporados como arquivos locais. A página do arquivo do Mazda RX-7 no Wikimedia Commons exibe também a indicação “License review needed”.
- A R15 usa o vídeo externo indicado pelo TMCBlog; não é um arquivo de áudio local.
