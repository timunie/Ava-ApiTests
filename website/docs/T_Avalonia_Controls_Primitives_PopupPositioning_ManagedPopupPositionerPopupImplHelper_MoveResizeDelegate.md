# ManagedPopupPositionerPopupImplHelper.MoveResizeDelegate Delegate




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public delegate void MoveResizeDelegate(
	PixelPoint position,
	Size size,
	double scaling
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Delegate Sub MoveResizeDelegate ( 
	position As PixelPoint,
	size As Size,
	scaling As Double
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type MoveResizeDelegate = 
    delegate of 
        position : PixelPoint * 
        size : Size * 
        scaling : float -> unit
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/PopupPositioning/ManagedPopupPositionerPopupImplHelper.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_PixelPoint">PixelPoint</a></dt><dd> </dd><dt>  <a href="T_Avalonia_Size">Size</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning Namespace</a>  
