---
title:FuncTreeDataTemplate(Func&lt;Object, Boolean&gt;, Func&lt;Object, INameScope, Control&gt;, Func&lt;Object, IEnumerable&gt;) Constructor
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# FuncTreeDataTemplate(Func&lt;Object, Boolean&gt;, Func&lt;Object, INameScope, Control&gt;, Func&lt;Object, IEnumerable&gt;) Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_Templates_FuncTreeDataTemplate">FuncTreeDataTemplate</a> class



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
public FuncTreeDataTemplate(
	Func<Object?, bool> match,
	Func<Object?, INameScope, Control?> build,
	Func<Object?, IEnumerable> itemsSelector
)
```
**VB**
``` VB
Public Sub New ( 
	match As Func(Of Object, Boolean),
	build As Func(Of Object, INameScope, Control),
	itemsSelector As Func(Of Object, IEnumerable)
)
```
**F#**
``` F#
new : 
        match : Func<Object, bool> * 
        build : Func<Object, INameScope, Control> * 
        itemsSelector : Func<Object, IEnumerable> -> FuncTreeDataTemplate
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-3" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="T_Avalonia_Controls_INameScope">INameScope</a>, <a href="T_Avalonia_Controls_Control">Control</a>)</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>)</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_FuncTreeDataTemplate">FuncTreeDataTemplate Class</a>  
<a href="Overload_Avalonia_Controls_Templates_FuncTreeDataTemplate__ctor">FuncTreeDataTemplate Overload</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  
