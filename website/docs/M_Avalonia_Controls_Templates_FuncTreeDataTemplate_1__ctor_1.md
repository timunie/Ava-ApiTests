# FuncTreeDataTemplate&lt;T&gt;(Func&lt;T, INameScope, Control&gt;, Func&lt;T, IEnumerable&gt;) Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_Templates_FuncTreeDataTemplate_1">FuncTreeDataTemplate(T)</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public FuncTreeDataTemplate(
	Func<T, INameScope, Control> build,
	Func<T, IEnumerable> itemsSelector
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	build As Func(Of T, INameScope, Control),
	itemsSelector As Func(Of T, IEnumerable)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        build : Func<'T, INameScope, Control> * 
        itemsSelector : Func<'T, IEnumerable> -> FuncTreeDataTemplate
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Templates/FuncTreeDataTemplate%601.cs#L25" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-3" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_Controls_Templates_FuncTreeDataTemplate_1">T</a>, <a href="T_Avalonia_Controls_INameScope">INameScope</a>, <a href="T_Avalonia_Controls_Control">Control</a>)</dt><dd>A function which when passed an object of <em>T</em> returns a control.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_Controls_Templates_FuncTreeDataTemplate_1">T</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>)</dt><dd>A function which when passed an object of <em>T</em> returns the child items.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_FuncTreeDataTemplate_1">FuncTreeDataTemplate(T) Class</a>  
<a href="Overload_Avalonia_Controls_Templates_FuncTreeDataTemplate_1__ctor">FuncTreeDataTemplate(T) Overload</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  

