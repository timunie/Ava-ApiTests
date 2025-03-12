# ArrangeOverride Method


DockPanel computes a position and final size for each of its children based upon their <a href="T_Avalonia_Controls_Dock">Dock</a> enum and sizing properties.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override Size ArrangeOverride(
	Size arrangeSize
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Function ArrangeOverride ( 
	arrangeSize As Size
) As Size
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ArrangeOverride : 
        arrangeSize : Size -> Size 
override ArrangeOverride : 
        arrangeSize : Size -> Size 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/DockPanel.cs#L152" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>Size that DockPanel will assume to position children.</dd></dl>

#### Return Value
<a href="T_Avalonia_Size">Size</a>

## See Also


#### Reference
<a href="T_Avalonia_Controls_DockPanel">DockPanel Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

