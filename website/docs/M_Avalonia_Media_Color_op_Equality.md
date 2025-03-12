# Equality Operator


Indicates whether the values of two specified <a href="T_Avalonia_Media_Color">Color</a> objects are equal.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool operator ==(
	Color left,
	Color right
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator = ( 
	left As Color,
	right As Color
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (=)
        left : Color * 
        right : Color  : bool
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/Color.cs#L741" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_Color">Color</a></dt><dd>The first object to compare.</dd><dt>  <a href="T_Avalonia_Media_Color">Color</a></dt><dd>The second object to compare.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if left and right are equal; otherwise, false.

## See Also


#### Reference
<a href="T_Avalonia_Media_Color">Color Structure</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

