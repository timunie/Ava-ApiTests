import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# Inequality Operator


Compares two GridLength structures for inequality.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static bool operator !=(
	GridLength gl1,
	GridLength gl2
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Operator <> ( 
	gl1 As GridLength,
	gl2 As GridLength
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static let inline (<>)
        gl1 : GridLength * 
        gl2 : GridLength  : bool
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_GridLength">GridLength</a></dt><dd>The first GridLength.</dd><dt>  <a href="T_Avalonia_Controls_GridLength">GridLength</a></dt><dd>The first GridLength.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
True if the structures are unequal, otherwise false.

## See Also


#### Reference
<a href="T_Avalonia_Controls_GridLength">GridLength Structure</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
