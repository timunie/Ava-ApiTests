import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# FuncControlTemplate&lt;T&gt; Constructor


Initializes a new instance of the <a href="T_Avalonia_Controls_Templates_FuncControlTemplate_1">FuncControlTemplate(T)</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public FuncControlTemplate(
	Func<T, INameScope, Control> build
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	build As Func(Of T, INameScope, Control)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        build : Func<'T, INameScope, Control> -> FuncControlTemplate
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Templates/FuncControlTemplate%602.cs#L17" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-3" target="_blank" rel="noopener noreferrer">Func</a>(<a href="T_Avalonia_Controls_Templates_FuncControlTemplate_1">T</a>, INameScope, <a href="T_Avalonia_Controls_Control">Control</a>)</dt><dd>The build function.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Templates_FuncControlTemplate_1">FuncControlTemplate(T) Class</a>  
<a href="N_Avalonia_Controls_Templates">Avalonia.Controls.Templates Namespace</a>  
