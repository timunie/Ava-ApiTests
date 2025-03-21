# ApplyLayoutConstraints Method


Calculates a control's size based on its <a href="P_Avalonia_Layout_Layoutable_Width">Width</a>, <a href="P_Avalonia_Layout_Layoutable_Height">Height</a>, <a href="P_Avalonia_Layout_Layoutable_MinWidth">MinWidth</a>, <a href="P_Avalonia_Layout_Layoutable_MaxWidth">MaxWidth</a>, <a href="P_Avalonia_Layout_Layoutable_MinHeight">MinHeight</a> and <a href="P_Avalonia_Layout_Layoutable_MaxHeight">MaxHeight</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static Size ApplyLayoutConstraints(
	Layoutable control,
	Size constraints
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function ApplyLayoutConstraints ( 
	control As Layoutable,
	constraints As Size
) As Size
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member ApplyLayoutConstraints : 
        control : Layoutable * 
        constraints : Size -> Size 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/LayoutHelper.cs#L29" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Layout_Layoutable">Layoutable</a></dt><dd>The control.</dd><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd>The space available for the control.</dd></dl>

#### Return Value
<a href="T_Avalonia_Size">Size</a>  
The control's size.

## See Also


#### Reference
<a href="T_Avalonia_Layout_LayoutHelper">LayoutHelper Class</a>  
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  

