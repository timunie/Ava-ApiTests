import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ParseLengths Method


Parses a string to return a collection of <a href="T_Avalonia_Controls_GridLength">GridLength</a>s.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static IEnumerable<GridLength> ParseLengths(
	string s
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function ParseLengths ( 
	s As String
) As IEnumerable(Of GridLength)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member ParseLengths : 
        s : string -> IEnumerable<GridLength> 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The string.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_Avalonia_Controls_GridLength">GridLength</a>)  
The <a href="T_Avalonia_Controls_GridLength">GridLength</a>.

## See Also


#### Reference
<a href="T_Avalonia_Controls_GridLength">GridLength Structure</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
