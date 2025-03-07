# TextInputMethodClient Class




## Definition
**Namespace:** <a href="N_Avalonia_Input_TextInput">Avalonia.Input.TextInput</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class TextInputMethodClient
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class TextInputMethodClient
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type TextInputMethodClient = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/TextInput/TextInputMethodClient.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  TextInputMethodClient</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Input_TextInput_TextInputMethodClient__ctor">TextInputMethodClient()</a></td>
<td>Initializes a new instance of the TextInputMethodClient class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Input_TextInput_TextInputMethodClient_CursorRectangle">CursorRectangle</a></td>
<td>Gets the cursor rectangle relative to the TextViewVisual</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_TextInput_TextInputMethodClient_Selection">Selection</a></td>
<td>Gets or sets the curent selection range within current surrounding text.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_TextInput_TextInputMethodClient_SupportsPreedit">SupportsPreedit</a></td>
<td>Indicates if TextViewVisual is capable of displaying non-committed input on the cursor position</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_TextInput_TextInputMethodClient_SupportsSurroundingText">SupportsSurroundingText</a></td>
<td>Indicates if text input client is capable of providing the text around the cursor</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_TextInput_TextInputMethodClient_SurroundingText">SurroundingText</a></td>
<td>Returns the text around the cursor, usually the current paragraph</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_TextInput_TextInputMethodClient_TextViewVisual">TextViewVisual</a></td>
<td>The visual that's showing the text</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_TextInput_TextInputMethodClient_ExecuteContextMenuAction">ExecuteContextMenuAction(ContextMenuAction)</a></td>
<td>Execute specific context menu actions</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_TextInput_TextInputMethodClient_RaiseCursorRectangleChanged">RaiseCursorRectangleChanged()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_TextInput_TextInputMethodClient_RaiseSelectionChanged">RaiseSelectionChanged()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_TextInput_TextInputMethodClient_RaiseSurroundingTextChanged">RaiseSurroundingTextChanged()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_TextInput_TextInputMethodClient_RaiseTextViewVisualChanged">RaiseTextViewVisualChanged()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_TextInput_TextInputMethodClient_RequestReset">RequestReset()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_TextInput_TextInputMethodClient_SetPreeditText_1">SetPreeditText(String)</a></td>
<td>Sets the non-committed input string</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_TextInput_TextInputMethodClient_SetPreeditText">SetPreeditText(String, Nullable(Int32))</a></td>
<td>Sets the non-committed input string and cursor offset in that string</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_TextInput_TextInputMethodClient_ShowInputPanel">ShowInputPanel()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Input_TextInput_TextInputMethodClient_CursorRectangleChanged">CursorRectangleChanged</a></td>
<td>Fires when the cursor rectangle has changed</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_TextInput_TextInputMethodClient_ResetRequested">ResetRequested</a></td>
<td>Fires when client wants to reset IME state</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_TextInput_TextInputMethodClient_SelectionChanged">SelectionChanged</a></td>
<td>Fires when the selection has changed</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_TextInput_TextInputMethodClient_SurroundingTextChanged">SurroundingTextChanged</a></td>
<td>Fires when the surrounding text has changed</td>
</tr>
<tr>
<td><a href="E_Avalonia_Input_TextInput_TextInputMethodClient_TextViewVisualChanged">TextViewVisualChanged</a></td>
<td>Fires when the text view visual has changed</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input_TextInput">Avalonia.Input.TextInput Namespace</a>  
