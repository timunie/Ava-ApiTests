import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# ScreensBase&lt;TKey, TScreen&gt; Class




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class ScreensBase<TKey, TScreen> : IScreenImpl
where TScreen : PlatformScreen

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class ScreensBase(Of TKey, TScreen As PlatformScreen)
	Implements IScreenImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type ScreensBase<'TKey, 'TScreen when 'TScreen : PlatformScreen> = 
    class
        interface IScreenImpl
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Platform/IScreenImpl.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  ScreensBase(TKey, TScreen)</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IScreenImpl">IScreenImpl</a></td></tr>
</table>



#### Type Parameters
<dl><dt /><dd /><dt /><dd /></dl>

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Platform_ScreensBase_2__ctor">ScreensBase(TKey, TScreen)()</a></td>
<td>Initializes a new instance of the ScreensBase(TKey, TScreen) class</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ScreensBase_2__ctor_1">ScreensBase(TKey, TScreen)(IEqualityComparer(TKey))</a></td>
<td>Initializes a new instance of the ScreensBase(TKey, TScreen) class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_ScreensBase_2_AllScreens">AllScreens</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ScreensBase_2_Changed">Changed</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ScreensBase_2_ScreenCount">ScreenCount</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_ScreensBase_2_CreateScreenFromKey">CreateScreenFromKey(TKey)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ScreensBase_2_GetAllScreenKeys">GetAllScreenKeys()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ScreensBase_2_GetScreenCount">GetScreenCount()</a></td>
<td> </td>
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
<td><a href="M_Avalonia_Platform_ScreensBase_2_OnChanged">OnChanged()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ScreensBase_2_RequestScreenDetails">RequestScreenDetails()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ScreensBase_2_RequestScreenDetailsCore">RequestScreenDetailsCore()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ScreensBase_2_ScreenAdded">ScreenAdded(TScreen)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ScreensBase_2_ScreenChanged">ScreenChanged(TScreen)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ScreensBase_2_ScreenFromPoint">ScreenFromPoint(PixelPoint)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ScreensBase_2_ScreenFromPointCore">ScreenFromPointCore(PixelPoint)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ScreensBase_2_ScreenFromRect">ScreenFromRect(PixelRect)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ScreensBase_2_ScreenFromRectCore">ScreenFromRectCore(PixelRect)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ScreensBase_2_ScreenFromTopLevel">ScreenFromTopLevel(ITopLevelImpl)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ScreensBase_2_ScreenFromTopLevelCore">ScreenFromTopLevelCore(ITopLevelImpl)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ScreensBase_2_ScreenFromWindow">ScreenFromWindow(IWindowBaseImpl)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ScreensBase_2_ScreenRemoved">ScreenRemoved(TScreen)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_ScreensBase_2_TryGetScreen">TryGetScreen(TKey, TScreen)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
