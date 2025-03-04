import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# FuncTreeDataTemplate(Func&lt;Object, Boolean&gt;, Func&lt;Object, INameScope, Control&gt;, Func&lt;Object, IEnumerable&gt;) Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_Templates_FuncTreeDataTemplate">FuncTreeDataTemplate</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public FuncTreeDataTemplate(
	Func<Object?, bool> match,
	Func<Object?, INameScope, Control?> build,
	Func<Object?, IEnumerable> itemsSelector
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	match As Func(Of Object, Boolean),
	build As Func(Of Object, INameScope, Control),
	itemsSelector As Func(Of Object, IEnumerable)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        match : Func<Object, bool> * 
        build : Func<Object, INameScope, Control> * 
        itemsSelector : Func<Object, IEnumerable> -> FuncTreeDataTemplate
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Templates/FuncTreeDataTemplate.cs#L49" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)</dt><dd>A function which determines whether the data template matches the specified data.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-3" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, INameScope, <a href="T_Avalonia_Controls_Control">Control</a>)</dt><dd>A function which when passed a matching object returns a control.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>, <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>)</dt><dd>A function which when passed a matching object returns the child items.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_FuncTreeDataTemplate">FuncTreeDataTemplate Class</a>  
<a href="Overload_Avalonia_Controls_Templates_FuncTreeDataTemplate__ctor">FuncTreeDataTemplate Overload</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  
