# ScreenFromTopLevel Method


Retrieves a Screen for the display that contains the specified <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public Screen? ScreenFromTopLevel(
	TopLevel topLevel
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ScreenFromTopLevel ( 
	topLevel As TopLevel
) As Screen
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ScreenFromTopLevel : 
        topLevel : TopLevel -> Screen 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Screens.cs#L106" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Controls_TopLevel">TopLevel</a></dt><dd>The top level for which to retrieve the Screen.</dd></dl>

#### Return Value
<a href="T_Avalonia_Platform_Screen">Screen</a>  
The <a href="T_Avalonia_Platform_Screen">Screen</a>.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.objectdisposedexception" target="_blank" rel="noopener noreferrer">ObjectDisposedException</a></td>
<td>TopLevel platform implementation was already disposed.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Controls_Screens">Screens Class</a>  
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
