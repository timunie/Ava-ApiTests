# FuncTreeDataTemplate(Type, Func&lt;Object, INameScope, Control&gt;, Func&lt;Object, IEnumerable&gt;) Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_Templates_FuncTreeDataTemplate">FuncTreeDataTemplate</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public FuncTreeDataTemplate(
	Type type,
	Func<Object?, INameScope, Control> build,
	Func<Object?, IEnumerable> itemsSelector
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	type As Type,
	build As Func(Of Object, INameScope, Control),
	itemsSelector As Func(Of Object, IEnumerable)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        type : Type * 
        build : Func<Object, INameScope, Control> * 
        itemsSelector : Func<Object, IEnumerable> -> FuncTreeDataTemplate
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Templates/FuncTreeDataTemplate.cs#L29" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a></dt><dd>The type of data which the data template matches.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-3" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="T_Avalonia_Controls_INameScope">INameScope</a>, <a href="T_Avalonia_Controls_Control">Control</a>)</dt><dd>A function which when passed an object of <em>type</em> returns a control.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>)</dt><dd>A function which when passed an object of <em>type</em> returns the child items.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_FuncTreeDataTemplate">FuncTreeDataTemplate Class</a>  
<a href="Overload_Avalonia_Controls_Templates_FuncTreeDataTemplate__ctor">FuncTreeDataTemplate Overload</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  

