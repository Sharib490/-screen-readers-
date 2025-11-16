<nav id="sidebar" class="fixed inset-y-0 left-0 w-64 bg-base-100 border-r transform -translate-x-full sm:translate-x-0 transition-transform" aria-label="Main navigation">
<div class="p-4">
<div class="mb-4 font-bold">My App</div>
<ul class="space-y-2">
{{#each nav}}
<li>
<a href="{{url}}" class="flex items-center gap-3 p-2 rounded-md hover:bg-base-200" aria-current="{{#if active}}page{{/if}}">
<span class="icon">{{icon}}</span>
<span class="label hidden sm:inline">{{label}}</span>
</a>
</li>
{{/each}}
</ul>
</div>
</nav>