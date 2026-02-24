/**
 * Hexo Injector Script for Vercel Speed Insights
 * 
 * This script injects the Vercel Speed Insights tracking code into the <body> section
 * of all generated pages. The Speed Insights script will track performance metrics
 * once deployed to Vercel with Speed Insights enabled in the dashboard.
 * 
 * For more information, see:
 * https://vercel.com/docs/speed-insights
 */

hexo.extend.injector.register('body_end', function() {
  return `
  <!-- Vercel Speed Insights -->
  <script>
    window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
  </script>
  <script defer src="/_vercel/speed-insights/script.js"></script>
  `;
}, 'default');
