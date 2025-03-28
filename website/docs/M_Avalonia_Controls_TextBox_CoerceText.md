# CoerceText Method


Coerces the current text.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
protected virtual string? CoerceText(
	string? value
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Protected Overridable Function CoerceText ( 
	value As String
) As String
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CoerceText : 
        value : string -> string 
override CoerceText : 
        value : string -> string 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/TextBox.cs#L621" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The initial text.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  
A coerced text.

## Remarks
This method also manages the internal undo/redo state whenever the text changes: if overridden, ensure that the base is called or undo/redo won't work correctly.

## See Also


#### Reference
<a href="T_Avalonia_Controls_TextBox">TextBox Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

