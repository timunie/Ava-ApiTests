import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# CreateTextLayout Method


Creates the <a href="P_Avalonia_Controls_TextBlock_TextLayout">TextLayout</a> used to render the text.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override TextLayout CreateTextLayout(
	string? text
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Function CreateTextLayout ( 
	text As String
) As TextLayout
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateTextLayout : 
        text : string -> TextLayout 
override CreateTextLayout : 
        text : string -> TextLayout 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd></dl>

#### Return Value
TextLayout  
A <a href="P_Avalonia_Controls_TextBlock_TextLayout">TextLayout</a> object.

## See Also


#### Reference
<a href="T_Avalonia_Controls_Primitives_AccessText">AccessText Class</a>  
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
