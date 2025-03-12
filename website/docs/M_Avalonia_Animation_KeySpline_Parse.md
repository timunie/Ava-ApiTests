# Parse Method


Parse a <a href="T_Avalonia_Animation_KeySpline">KeySpline</a> from a string. The string needs to contain 4 values in it for the 2 control points.



## Definition
**Namespace:** <a href="N_Avalonia_Animation">Avalonia.Animation</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static KeySpline Parse(
	string value,
	CultureInfo? culture
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function Parse ( 
	value As String,
	culture As CultureInfo
) As KeySpline
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member Parse : 
        value : string * 
        culture : CultureInfo -> KeySpline 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Animation/KeySpline.cs#L84" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>string with 4 values in it</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a></dt><dd>culture of the string</dd></dl>

#### Return Value
<a href="T_Avalonia_Animation_KeySpline">KeySpline</a>  
A <a href="T_Avalonia_Animation_KeySpline">KeySpline</a> with the appropriate values set

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.formatexception" target="_blank" rel="noopener noreferrer">FormatException</a></td>
<td>Thrown if the string does not have 4 values</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Animation_KeySpline">KeySpline Class</a>  
<a href="N_Avalonia_Animation">Avalonia.Animation Namespace</a>  

