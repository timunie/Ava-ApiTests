# MeasureOverride Method


Measures the control and its child elements as part of a layout pass.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Presenters">Avalonia.Controls.Presenters</a>  
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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Presenters/ContentPresenter.cs#L601" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The size available to the control.</dd></dl>

#### Return Value
<a href="T_Avalonia_Size">Size</a>  
The desired size for the control.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Presenters_ContentPresenter">ContentPresenter Class</a>  
<a href="N_Avalonia_Controls_Presenters">Avalonia.Controls.Presenters Namespace</a>  

