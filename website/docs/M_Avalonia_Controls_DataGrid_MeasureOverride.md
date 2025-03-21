# MeasureOverride Method


Measures the children of a <a href="T_Avalonia_Controls_DataGridRow">DataGridRow</a> to prepare for arranging them during the ArrangeOverride(Size) pass.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls.DataGrid/DataGrid.cs#L2191" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The available size that this element can give to child elements. Indicates an upper limit that child elements should not exceed.</dd></dl>

#### Return Value
<a href="T_Avalonia_Size">Size</a>  
The size that the <a href="T_Avalonia_Controls_DataGridRow">DataGridRow</a> determines it needs during layout, based on its calculations of child object allocated sizes.

## See Also


#### Reference
<a href="T_Avalonia_Controls_DataGrid">DataGrid Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

