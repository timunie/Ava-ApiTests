# TransparencyLevelHint Property


Gets or sets the <a href="T_Avalonia_Controls_WindowTransparencyLevel">WindowTransparencyLevel</a> that the TopLevel should use when possible. Accepts multiple values which are applied in a fallback order. For instance, with "Mica, Blur" Mica will be applied only on platforms where it is possible, and Blur will be used on the rest of them. Default value is an empty array or "None".



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IReadOnlyList<WindowTransparencyLevel> TransparencyLevelHint { get; set; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Property TransparencyLevelHint As IReadOnlyList(Of WindowTransparencyLevel)
	Get
	Set
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TransparencyLevelHint : IReadOnlyList<WindowTransparencyLevel> with get, set
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/TopLevel.cs#L359" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Controls_WindowTransparencyLevel">WindowTransparencyLevel</a>)

## See Also


#### Reference
<a href="T_Avalonia_Controls_TopLevel">TopLevel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

