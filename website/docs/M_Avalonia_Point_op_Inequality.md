# Inequality Operator


Checks for inequality between two <a href="T_Avalonia_Point">Point</a>s.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool operator !=(
	Point left,
	Point right
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator <> ( 
	left As Point,
	right As Point
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (<>)
        left : Point * 
        right : Point  : bool
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Point.cs#L88" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The first point.</dd><dt>  <a href="T_Avalonia_Point">Point</a></dt><dd>The second point.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the points are unequal; otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_Point">Point Structure</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

