# MeasureOverride Method


Measures the control and its child elements as part of a layout pass.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Viewbox.cs#L120" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The size available to the control.</dd></dl>

#### Return Value
<a href="T_Avalonia_Size">Size</a>  
The desired size for the control.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Viewbox">Viewbox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
