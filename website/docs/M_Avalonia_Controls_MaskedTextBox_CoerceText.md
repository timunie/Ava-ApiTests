# CoerceText Method


Coerces the current text.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/MaskedTextBox.cs#L435" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  
A coerced text.This method also manages the internal undo/redo state whenever the text changes: if overridden, ensure that the base is called or undo/redo won't work correctly.

## See Also


#### Reference
<a href="T_Avalonia_Controls_MaskedTextBox">MaskedTextBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

