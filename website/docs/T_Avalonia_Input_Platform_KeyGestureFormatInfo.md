# KeyGestureFormatInfo Class


Provides platform specific formatting information for the KeyGesture class



## Definition
**Namespace:** <a href="N_Avalonia_Input_Platform">Avalonia.Input.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class KeyGestureFormatInfo : IFormatProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class KeyGestureFormatInfo
	Implements IFormatProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type KeyGestureFormatInfo = 
    class
        interface IFormatProvider
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/Platform/KeyGestureFormatInfo.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  KeyGestureFormatInfo</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.iformatprovider" target="_blank" rel="noopener noreferrer">IFormatProvider</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Input_Platform_KeyGestureFormatInfo__ctor">KeyGestureFormatInfo(IReadOnlyDictionary(Key, String), String, String, String, String)</a></td>
<td>Provides platform specific formatting information for the KeyGesture class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Input_Platform_KeyGestureFormatInfo_Alt">Alt</a></td>
<td>The string used to represent Alt on the appropriate platform. Defaults to "Alt".</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Platform_KeyGestureFormatInfo_Ctrl">Ctrl</a></td>
<td>The string used to represent Ctrl on the appropriate platform. Defaults to "Ctrl".</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Platform_KeyGestureFormatInfo_Invariant">Invariant</a></td>
<td>The Invariant format. Only uses strings straight from the appropriate Enums.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Platform_KeyGestureFormatInfo_Meta">Meta</a></td>
<td>The string used to represent Meta on the appropriate platform. Defaults to "Cmd".</td>
</tr>
<tr>
<td><a href="P_Avalonia_Input_Platform_KeyGestureFormatInfo_Shift">Shift</a></td>
<td>The string used to represent Shift on the appropriate platform. Defaults to "Shift".</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_Platform_KeyGestureFormatInfo_FormatKey">FormatKey(Key)</a></td>
<td>Checks the platformKeyOverrides and s_commonKeyOverrides Dictionaries, in order, for the appropriate string to represent the given Key on this platform. NOTE: If platformKeyOverrides is null, this is assumed to be the Invariant and the Dictionaries are not checked. The plain Enum string is returned instead.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_Platform_KeyGestureFormatInfo_GetFormat">GetFormat(Type)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Input_Platform_KeyGestureFormatInfo_GetInstance">GetInstance(IFormatProvider)</a></td>
<td>Gets the most appropriate KeyGestureFormatInfo for the IFormatProvider requested. This will be, in order: 1. The provided IFormatProvider as a KeyGestureFormatInfo 2. The currently registered platform specific KeyGestureFormatInfo, if present. 3. The Invariant otherwise.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Input_Platform">Avalonia.Input.Platform Namespace</a>  

