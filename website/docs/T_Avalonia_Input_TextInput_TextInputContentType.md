# TextInputContentType Enumeration




## Definition
**Namespace:** <a href="N_Avalonia_Input_TextInput">Avalonia.Input.TextInput</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public enum TextInputContentType
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Enumeration TextInputContentType
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type TextInputContentType
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/TextInput/TextInputContentType.cs" title="View the source code">View Source</a>



## Members
<table>
<tr>
<td>Normal</td>
<td>0</td>
<td>Default keyboard for the users configured input method.</td>
</tr>
<tr>
<td>Alpha</td>
<td>1</td>
<td>Display a keyboard that only has alphabetic characters.</td>
</tr>
<tr>
<td>Digits</td>
<td>2</td>
<td>Display a numeric keypad only capable of numbers. i.e. Phone number</td>
</tr>
<tr>
<td>Pin</td>
<td>3</td>
<td>Display a numeric keypad for inputting a PIN.</td>
</tr>
<tr>
<td>Number</td>
<td>4</td>
<td>Display a numeric keypad capable of inputting numbers including decimal seperator and sign.</td>
</tr>
<tr>
<td>Email</td>
<td>5</td>
<td>Display a keyboard for entering an email address.</td>
</tr>
<tr>
<td>Url</td>
<td>6</td>
<td>Display a keyboard for entering a URL.</td>
</tr>
<tr>
<td>Name</td>
<td>7</td>
<td>Display a keyboard for entering a persons name.</td>
</tr>
<tr>
<td>Password</td>
<td>8</td>
<td>Display a keyboard for entering sensitive data.</td>
</tr>
<tr>
<td>Social</td>
<td>9</td>
<td>Display a keyboard suitable for #tag and @mentions. Not available on all platforms, will fallback to a suitable keyboard when not available.</td>
</tr>
<tr>
<td>Search</td>
<td>10</td>
<td>Display a keyboard for entering a search keyword.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input_TextInput">Avalonia.Input.TextInput Namespace</a>  

