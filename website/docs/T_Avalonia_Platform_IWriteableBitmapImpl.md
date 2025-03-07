# IWriteableBitmapImpl Interface


Defines the platform-specific interface for a <a href="T_Avalonia_Media_Imaging_WriteableBitmap">WriteableBitmap</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IWriteableBitmapImpl : IBitmapImpl, 
	IDisposable, IReadableBitmapWithAlphaImpl, IReadableBitmapImpl
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IWriteableBitmapImpl
	Inherits IBitmapImpl, IDisposable, IReadableBitmapWithAlphaImpl, IReadableBitmapImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IWriteableBitmapImpl = 
    interface
        interface IBitmapImpl
        interface IDisposable
        interface IReadableBitmapWithAlphaImpl
        interface IReadableBitmapImpl
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IWriteableBitmapImpl.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>, <a href="T_Avalonia_Platform_IReadableBitmapImpl">IReadableBitmapImpl</a>, <a href="T_Avalonia_Platform_IReadableBitmapWithAlphaImpl">IReadableBitmapWithAlphaImpl</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_IReadableBitmapWithAlphaImpl_AlphaFormat">AlphaFormat</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IReadableBitmapWithAlphaImpl">IReadableBitmapWithAlphaImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IBitmapImpl_Dpi">Dpi</a></td>
<td>Gets the dots per inch (DPI) of the image.<br />(Inherited from <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IReadableBitmapImpl_Format">Format</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IReadableBitmapImpl">IReadableBitmapImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IBitmapImpl_PixelSize">PixelSize</a></td>
<td>Gets the size of the bitmap, in device pixels.<br />(Inherited from <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IBitmapImpl_Version">Version</a></td>
<td>Version of the pixel data<br />(Inherited from <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IReadableBitmapImpl_Lock">Lock()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IReadableBitmapImpl">IReadableBitmapImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IBitmapImpl_Save">Save(Stream, Nullable(Int32))</a></td>
<td>Saves the bitmap to a stream in png format.<br />(Inherited from <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IBitmapImpl_Save_1">Save(String, Nullable(Int32))</a></td>
<td>Saves the bitmap to a file.<br />(Inherited from <a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
