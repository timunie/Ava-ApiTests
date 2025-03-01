import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# CoerceText Method


Coerces the current text.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected override string? CoerceText(
	string? text
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overrides Function CoerceText ( 
	text As String
) As String
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CoerceText : 
        text : string -> string 
override CoerceText : 
        text : string -> string 
```
</TabItem>
</Tabs>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  
A coerced text.This method also manages the internal undo/redo state whenever the text changes: if overridden, ensure that the base is called or undo/redo won't work correctly.

## See Also


#### Reference
<a href="T_Avalonia_Controls_MaskedTextBox">MaskedTextBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
