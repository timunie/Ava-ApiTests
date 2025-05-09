# MeasureOverride Method


Measures the children of a <a href="T_Avalonia_Controls_Primitives_DataGridRowHeader">DataGridRowHeader</a> to prepare for arranging them during the <a href="https://learn.microsoft.com/dotnet/api/system.windows.frameworkelement.arrangeoverride" target="_blank" rel="noopener noreferrer">ArrangeOverride(Size)</a> pass.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls.DataGrid (in Avalonia.Controls.DataGrid.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override Size MeasureOverride(
	Size availableSize
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Function MeasureOverride ( 
	availableSize As Size
) As Size
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract MeasureOverride : 
        availableSize : Size -> Size 
override MeasureOverride : 
        availableSize : Size -> Size 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGridRowHeader.cs#L124" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The available size that this element can give to child elements. Indicates an upper limit that child elements should not exceed.</dd></dl>

#### Return Value
<a href="T_Avalonia_Size">Size</a>  
The size that the <a href="T_Avalonia_Controls_Primitives_DataGridRowHeader">DataGridRowHeader</a> determines it needs during layout, based on its calculations of child object allocated sizes.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_DataGridRowHeader">DataGridRowHeader Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  

