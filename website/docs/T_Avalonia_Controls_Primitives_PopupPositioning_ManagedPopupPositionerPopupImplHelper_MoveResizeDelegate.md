import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ManagedPopupPositionerPopupImplHelper.MoveResizeDelegate Delegate




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

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



#### Parameters
<dl><dt>  PixelPoint</dt><dd> </dd><dt>  Size</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.double" target="_blank" rel="noopener noreferrer">Double</a></dt><dd> </dd></dl>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Primitives_PopupPositioning">Avalonia.Controls.Primitives.PopupPositioning Namespace</a>  
