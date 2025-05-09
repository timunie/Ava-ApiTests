# MeasureOverride Method


Provides the behavior for the "Measure" pass of layout.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/LayoutTransformControl.cs#L119" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The available size that this element can give to child elements.</dd></dl>

#### Return Value
<a href="T_Avalonia_Size">Size</a>  
The size that this element determines it needs during layout, based on its calculations of child element sizes.

## See Also


#### Reference
<a href="T_Avalonia_Controls_LayoutTransformControl">LayoutTransformControl Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

