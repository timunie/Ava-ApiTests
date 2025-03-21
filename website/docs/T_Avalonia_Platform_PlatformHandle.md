# PlatformHandle Class


Represents a platform-specific handle.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class PlatformHandle : IPlatformHandle, 
	IEquatable<PlatformHandle>
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class PlatformHandle
	Implements IPlatformHandle, IEquatable(Of PlatformHandle)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type PlatformHandle = 
    class
        interface IPlatformHandle
        interface IEquatable<PlatformHandle>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/PlatformHandle.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  PlatformHandle</td></tr>
<tr><td><strong>Derived</strong></td><td><a href="T_Avalonia_Android_AndroidViewControlHandle">Avalonia.Android.AndroidViewControlHandle</a><br /><a href="T_Avalonia_iOS_UIViewControlHandle">Avalonia.iOS.UIViewControlHandle</a></td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IPlatformHandle">IPlatformHandle</a>, <a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(PlatformHandle)</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Platform_PlatformHandle__ctor">PlatformHandle(IntPtr, String)</a></td>
<td>Initializes a new instance of the PlatformHandle class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_PlatformHandle_Handle">Handle</a></td>
<td>Gets the handle.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_PlatformHandle_HandleDescriptor">HandleDescriptor</a></td>
<td>Gets an optional string that describes what <a href="P_Avalonia_Platform_PlatformHandle_Handle">Handle</a> represents.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_PlatformHandle_Equals_1">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Object.Equals(Object)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_PlatformHandle_Equals">Equals(PlatformHandle)</a></td>
<td>Indicates whether the current object is equal to another object of the same type.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_PlatformHandle_GetHashCode">GetHashCode()</a></td>
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
<td><a href="M_Avalonia_Platform_PlatformHandle_ToString">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">Object.ToString()</a>)</td>
</tr>
</table>

## Operators
<table>
<tr>
<td><a href="M_Avalonia_Platform_PlatformHandle_op_Equality">Equality(PlatformHandle, PlatformHandle)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_PlatformHandle_op_Inequality">Inequality(PlatformHandle, PlatformHandle)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

