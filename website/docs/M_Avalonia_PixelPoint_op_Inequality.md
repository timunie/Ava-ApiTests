# Inequality Operator


Checks for inequality between two <a href="T_Avalonia_PixelPoint">PixelPoint</a>s.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool operator !=(
	PixelPoint left,
	PixelPoint right
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator <> ( 
	left As PixelPoint,
	right As PixelPoint
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (<>)
        left : PixelPoint * 
        right : PixelPoint  : bool
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/PixelPoint.cs#L56" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_PixelPoint">PixelPoint</a></dt><dd>The first point.</dd><dt>  <a href="T_Avalonia_PixelPoint">PixelPoint</a></dt><dd>The second point.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the points are unequal; otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_PixelPoint">PixelPoint Structure</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
