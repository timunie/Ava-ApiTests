# MeasureOverride Method


Updates DesiredSize of the DockPanel. Called by parent Control. This is the first pass of layout.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override Size MeasureOverride(
	Size constraint
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Function MeasureOverride ( 
	constraint As Size
) As Size
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract MeasureOverride : 
        constraint : Size -> Size 
override MeasureOverride : 
        constraint : Size -> Size 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/DockPanel.cs#L91" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>Constraint size is an "upper limit" that the return value should not exceed.</dd></dl>

#### Return Value
<a href="T_Avalonia_Size">Size</a>  
The Panel's desired size.Children are measured based on their sizing properties and <a href="T_Avalonia_Controls_Dock">Dock</a>. Each child is allowed to consume all of the space on the side on which it is docked; Left/Right docked children are granted all vertical space for their entire width, and Top/Bottom docked children are granted all horizontal space for their entire height.

## See Also


#### Reference
<a href="T_Avalonia_Controls_DockPanel">DockPanel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

