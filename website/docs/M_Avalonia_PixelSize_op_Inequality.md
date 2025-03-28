# Inequality Operator


Checks for inequality between two <a href="T_Avalonia_Size">Size</a>s.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool operator !=(
	PixelSize left,
	PixelSize right
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator <> ( 
	left As PixelSize,
	right As PixelSize
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (<>)
        left : PixelSize * 
        right : PixelSize  : bool
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/PixelSize.cs#L63" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd>The first size.</dd><dt>  <a href="T_Avalonia_PixelSize">PixelSize</a></dt><dd>The second size.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the sizes are unequal; otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_PixelSize">PixelSize Structure</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

