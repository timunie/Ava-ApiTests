# FuncDataTemplate&lt;T&gt;(Func&lt;T, Boolean&gt;, Func&lt;T, Control&gt;, Boolean) Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_Templates_FuncDataTemplate_1">FuncDataTemplate(T)</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public FuncDataTemplate(
	Func<T, bool> match,
	Func<T, Control> build,
	bool supportsRecycling = false
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	match As Func(Of T, Boolean),
	build As Func(Of T, Control),
	Optional supportsRecycling As Boolean = false
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        match : Func<'T, bool> * 
        build : Func<'T, Control> * 
        ?supportsRecycling : bool 
(* Defaults:
        let _supportsRecycling = defaultArg supportsRecycling false
*)
-> FuncDataTemplate
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Templates/FuncDataTemplate%601.cs#L56" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_Controls_Templates_FuncDataTemplate_1">T</a>, <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)</dt><dd>A function which determines whether the data template matches the specified data.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_Controls_Templates_FuncDataTemplate_1">T</a>, <a href="T_Avalonia_Controls_Control">Control</a>)</dt><dd>A function which when passed an object of <em>T</em> returns a control.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  (Optional)</dt><dd>Whether the control can be recycled.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_FuncDataTemplate_1">FuncDataTemplate(T) Class</a>  
<a href="Overload_Avalonia_Controls_Templates_FuncDataTemplate_1__ctor">FuncDataTemplate(T) Overload</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  

