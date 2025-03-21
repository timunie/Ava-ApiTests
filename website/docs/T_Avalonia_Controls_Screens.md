# Screens Class


Represents all screens available on a device.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class Screens
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class Screens
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type Screens = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Screens.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Screens</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Screens_All">All</a></td>
<td>Gets the list of all screens available on the device.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Screens_Primary">Primary</a></td>
<td>Gets the primary screen on the device.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Screens_ScreenCount">ScreenCount</a></td>
<td>Gets the total number of screens available on the device.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
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
<td><a href="M_Avalonia_Controls_Screens_RequestScreenDetails">RequestScreenDetails()</a></td>
<td>Asks underlying platform to provide detailed screen information. On some platforms it might include non-primary screens, as well as display names.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Screens_ScreenFromBounds">ScreenFromBounds(PixelRect)</a></td>
<td>Retrieves a Screen for the display that contains the rectangle.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Screens_ScreenFromPoint">ScreenFromPoint(PixelPoint)</a></td>
<td>Retrieves a Screen for the display that contains the specified point.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Screens_ScreenFromTopLevel">ScreenFromTopLevel(TopLevel)</a></td>
<td>Retrieves a Screen for the display that contains the specified <a href="T_Avalonia_Controls_TopLevel">TopLevel</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Screens_ScreenFromVisual">ScreenFromVisual(Visual)</a></td>
<td>Retrieves a Screen for the display that contains the specified <a href="T_Avalonia_Visual">Visual</a>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Screens_ScreenFromWindow">ScreenFromWindow(WindowBase)</a></td>
<td>Retrieves a Screen for the display that contains the specified <a href="T_Avalonia_Controls_WindowBase">WindowBase</a>.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_Screens_Changed">Changed</a></td>
<td>Event raised when any screen was changed.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

