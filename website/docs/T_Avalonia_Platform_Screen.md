# Screen Class


Represents a single display screen.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class Screen : IEquatable<Screen>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class Screen
	Implements IEquatable(Of Screen)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type Screen = 
    class
        interface IEquatable<Screen>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Platform/Screen.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  Screen</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Platform_PlatformScreen">Avalonia.Platform.PlatformScreen</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(Screen)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Platform_Screen__ctor">Screen(Double, PixelRect, PixelRect, Boolean)</a></td>
<td>Initializes a new instance of the Screen class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_Screen_Bounds">Bounds</a></td>
<td>Gets the overall pixel-size and position of the screen.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_Screen_CurrentOrientation">CurrentOrientation</a></td>
<td>Gets the current orientation of a screen.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_Screen_DisplayName">DisplayName</a></td>
<td>Gets the device name associated with a display.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_Screen_IsPrimary">IsPrimary</a></td>
<td>Gets a value indicating whether the screen is the primary one.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_Screen_Scaling">Scaling</a></td>
<td>Gets the scaling factor applied to the screen by the operating system.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_Screen_WorkingArea">WorkingArea</a></td>
<td>Gets the actual working-area pixel-size of the screen.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_Screen_Equals_1">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Object.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Screen_Equals">Equals(Screen)</a></td>
<td>Indicates whether the current object is equal to another object of the same type.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Screen_GetHashCode">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">Object.GetHashCode()</a>)</td>
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
<td><a href="M_Avalonia_Platform_Screen_ToString">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">Object.ToString()</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Screen_TryGetPlatformHandle">TryGetPlatformHandle()</a></td>
<td>Tries to get the platform handle for the Screen.</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Platform_Screen_op_Equality">Equality(Screen, Screen)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_Screen_op_Inequality">Inequality(Screen, Screen)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
