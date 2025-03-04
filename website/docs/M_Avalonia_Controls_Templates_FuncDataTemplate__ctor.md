import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# FuncDataTemplate(Func&lt;Object, Boolean&gt;, Func&lt;Object, INameScope, Control&gt;, Boolean) Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_Templates_FuncDataTemplate">FuncDataTemplate</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public FuncDataTemplate(
	Func<Object?, bool> match,
	Func<Object?, INameScope, Control?> build,
	bool supportsRecycling = false
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	match As Func(Of Object, Boolean),
	build As Func(Of Object, INameScope, Control),
	Optional supportsRecycling As Boolean = false
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        match : Func<Object, bool> * 
        build : Func<Object, INameScope, Control> * 
        ?supportsRecycling : bool 
(* Defaults:
        let _supportsRecycling = defaultArg supportsRecycling false
*)
-> FuncDataTemplate
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Templates/FuncDataTemplate.cs#L92" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)</dt><dd>A function which determines whether the data template matches the specified data.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-3" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, INameScope, <a href="T_Avalonia_Controls_Control">Control</a>)</dt><dd>A function which returns a control for matching data.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the control can be recycled.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_FuncDataTemplate">FuncDataTemplate Class</a>  
<a href="Overload_Avalonia_Controls_Templates_FuncDataTemplate__ctor">FuncDataTemplate Overload</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  
