/**
 * Hexo Injector Script for Vercel Web Analytics
 * 
 * This script injects the Vercel Web Analytics tracking code into the <head> section
 * of all generated pages. The analytics script will track page views automatically
 * once deployed to Vercel with Web Analytics enabled in the dashboard.
 * 
 * For more information, see:
 * https://vercel.com/docs/analytics
 */

hexo.extend.injector.register('head_end', function() {
  return `
  <!-- Vercel Web Analytics -->
  <script>
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
  </script>
  <script defer src="/_vercel/insights/script.js"></script>
  `;
}, 'default');
