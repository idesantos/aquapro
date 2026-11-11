# Aquapro Natação · site novo

Site estático em [Astro](https://astro.build), com o mesmo visual dos sites da Aquacenter, nas cores da logo da Aquapro:
- hero com água interativa em WebGL;
- rolagem suave com Lenis;
- animações com GSAP.

- **Domínio:** https://aquapronatacao.com.br/
- **Versão de teste:** https://idesantos.github.io/aquapro/ (com `noindex`; cada push na `main` republica).
- **Projeto irmão:** `~/projetos/aquacenter-casa-verde`. Este projeto partiu dele em 11/11/2026.

## Comandos

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # build de teste (com noindex)
npm run pacote   # build de produção + aquapro-site.zip para subir na hospedagem
```

## Publicar

Não há deploy automático para o domínio.
1. Rode `npm run pacote`.
2. No Gerenciador de Arquivos da hospedagem, entre em `public_html`.
3. Suba `aquapro-site.zip` e extraia numa pasta chamada `site`.
4. Mova tudo de dentro de `site` para `public_html`, inclusive o `.htaccess`.
5. Apague a pasta `site` e o zip.

O build de produção gera:
- o `.htaccess`, com HTTPS, sem www, 301 das páginas antigas dos níveis e PHP bloqueado;
- o sitemap;
- o `robots.txt`.

## Onde editar o conteúdo

| O quê | Arquivo |
|---|---|
| WhatsApp, e-mail, endereço, funcionamento (vazio por enquanto), sobre | `src/data/site.ts` |
| Grade de horários (vazia por enquanto) | `src/data/horarios.ts` |
| Modalidades (nome, resumo, foto, diferenciais) | `src/data/modalidades.ts` |
| Textos das modalidades (descrição e benefícios) | `src/data/modalidades-conteudo.json` |
| Metodologia Aquativa e níveis (mascotes) | `src/data/metodo.ts` |
| Cores | `src/styles/global.css` (`:root`) |
| Fotos | `src/assets/img/` |
