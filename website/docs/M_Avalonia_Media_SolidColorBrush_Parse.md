# Parse Method


Parses a brush string.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static SolidColorBrush Parse(
	string s
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function Parse ( 
	s As String
) As SolidColorBrush
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member Parse : 
        s : string -> SolidColorBrush 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/SolidColorBrush.cs#L68" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The brush string.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_SolidColorBrush">SolidColorBrush</a>  
The <a href="P_Avalonia_Media_SolidColorBrush_Color">Color</a>.Whereas <a href="M_Avalonia_Media_Brush_Parse">Parse(String)</a> may return an immutable solid color brush, this method always returns a mutable <a href="T_Avalonia_Media_SolidColorBrush">SolidColorBrush</a>.

## See Also


#### Reference
<a href="T_Avalonia_Media_SolidColorBrush">SolidColorBrush Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

