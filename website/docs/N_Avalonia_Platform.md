# Avalonia.Platform Namespace






## Classes
<table>
<tr>
<td><a href="T_Avalonia_Platform_AssetLoader">AssetLoader</a></td>
<td>Loads assets compiled into the application binary.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_DefaultPlatformSettings">DefaultPlatformSettings</a></td>
<td>A default implementation of <a href="T_Avalonia_Platform_IPlatformSettings">IPlatformSettings</a> for platforms.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_DrawingContextImplExtensions">DrawingContextImplExtensions</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_KnownPlatformGraphicsExternalImageHandleTypes">KnownPlatformGraphicsExternalImageHandleTypes</a></td>
<td>Describes various GPU memory handle types that are currently supported by Avalonia graphics backends</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_KnownPlatformGraphicsExternalSemaphoreHandleTypes">KnownPlatformGraphicsExternalSemaphoreHandleTypes</a></td>
<td>Describes various GPU semaphore handle types that are currently supported by Avalonia graphics backends</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_LockedFramebuffer">LockedFramebuffer</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_OptionalFeatureProviderExtensions">OptionalFeatureProviderExtensions</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_PixelFormats">PixelFormats</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_PlatformColorValues">PlatformColorValues</a></td>
<td>Information about current system color values, including information about dark mode and accent colors.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_PlatformGraphicsContextLostException">PlatformGraphicsContextLostException</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_PlatformGraphicsDeviceAdapterDescription">PlatformGraphicsDeviceAdapterDescription</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_PlatformHandle">PlatformHandle</a></td>
<td>Represents a platform-specific handle.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_PlatformScreen">PlatformScreen</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_ScopedResource_1">ScopedResource(T)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_Screen">Screen</a></td>
<td>Represents a single display screen.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_ScreensBase_2">ScreensBase(TKey, TScreen)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_StandardAssetLoader">StandardAssetLoader</a></td>
<td>Loads assets compiled into the application binary.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_StandardRuntimePlatform">StandardRuntimePlatform</a></td>
<td> </td>
</tr>
</table>

## Structures
<table>
<tr>
<td><a href="T_Avalonia_Platform_LtrbPixelRect">LtrbPixelRect</a></td>
<td>This struct is essentially the same thing as RECT from win32 API Unlike our "normal" PixelRect which is more human-readable and human-usable this struct is optimized for actual processing that doesn't really care about Width and Height but pretty much always only cares about Right and Bottom edge coordinates Not having to constantly convert between Width/Height and Right/Bottom for no actual reason saves us some perf This structure is intended to be mostly internal, but it's exposed as a PrivateApi type so it can be passed to the drawing backend when needed</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_LtrbRect">LtrbRect</a></td>
<td>This struct is essentially the same thing as MilRectD Unlike our "normal" Rect which is more human-readable and human-usable this struct is optimized for actual processing that doesn't really care about Width and Height but pretty much always only cares about Right and Bottom edge coordinates Not having to constantly convert between Width/Height and Right/Bottom for no actual reason saves us some perf This structure is intended to be mostly internal, but it's exposed as a PrivateApi type so it can be passed to the drawing backend when needed</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_PixelFormat">PixelFormat</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_PlatformGraphicsExternalImageProperties">PlatformGraphicsExternalImageProperties</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_RenderTargetDrawingContextProperties">RenderTargetDrawingContextProperties</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_RenderTargetProperties">RenderTargetProperties</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_RuntimePlatformInfo">RuntimePlatformInfo</a></td>
<td> </td>
</tr>
</table>

## Interfaces
<table>
<tr>
<td><a href="T_Avalonia_Platform_IApplicationPlatformEvents">IApplicationPlatformEvents</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IAssetLoader">IAssetLoader</a></td>
<td>Loads assets compiled into the application binary.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IBitmapImpl">IBitmapImpl</a></td>
<td>Defines the platform-specific interface for a <a href="T_Avalonia_Media_Imaging_Bitmap">Bitmap</a>.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_ICursorFactory">ICursorFactory</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_ICursorImpl">ICursorImpl</a></td>
<td>Represents a platform implementation of a <a href="T_Avalonia_Input_Cursor">Cursor</a>.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IDrawingContextImpl">IDrawingContextImpl</a></td>
<td>Defines the interface through which drawing occurs.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IDrawingContextImplWithEffects">IDrawingContextImplWithEffects</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IDrawingContextLayerImpl">IDrawingContextLayerImpl</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IDrawingContextLayerWithRenderContextAffinityImpl">IDrawingContextLayerWithRenderContextAffinityImpl</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IDrawingContextWithAcrylicLikeSupport">IDrawingContextWithAcrylicLikeSupport</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IExternalObjectsRenderInterfaceContextFeature">IExternalObjectsRenderInterfaceContextFeature</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IFontManagerImpl">IFontManagerImpl</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IGeometryContext">IGeometryContext</a></td>
<td>Describes a geometry using drawing commands.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IGeometryContext2">IGeometryContext2</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IGeometryImpl">IGeometryImpl</a></td>
<td>Defines the platform-specific interface for a <a href="T_Avalonia_Media_Geometry">Geometry</a>.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IGlyphRunImpl">IGlyphRunImpl</a></td>
<td>An immutable platform representation of a <a href="T_Avalonia_Media_GlyphRun">GlyphRun</a>.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_ILockedFramebuffer">ILockedFramebuffer</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IMacOSTopLevelPlatformHandle">IMacOSTopLevelPlatformHandle</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_INativePlatformHandleSurface">INativePlatformHandleSurface</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IPlatformBehaviorInhibition">IPlatformBehaviorInhibition</a></td>
<td>Allows to inhibit platform specific behavior.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IPlatformGraphics">IPlatformGraphics</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IPlatformGraphicsContext">IPlatformGraphicsContext</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IPlatformGraphicsReadyStateFeature">IPlatformGraphicsReadyStateFeature</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IPlatformGraphicsWithFeatures">IPlatformGraphicsWithFeatures</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IPlatformHandle">IPlatformHandle</a></td>
<td>Represents a platform-specific handle.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IPlatformIconLoader">IPlatformIconLoader</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IPlatformLifetimeEventsImpl">IPlatformLifetimeEventsImpl</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IPlatformRenderInterface">IPlatformRenderInterface</a></td>
<td>Defines the main platform-specific interface for the rendering subsystem.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IPlatformRenderInterfaceContext">IPlatformRenderInterfaceContext</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IPlatformRenderInterfaceImportedImage">IPlatformRenderInterfaceImportedImage</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IPlatformRenderInterfaceImportedObject">IPlatformRenderInterfaceImportedObject</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IPlatformRenderInterfaceImportedSemaphore">IPlatformRenderInterfaceImportedSemaphore</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IPlatformRenderInterfaceRegion">IPlatformRenderInterfaceRegion</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IPlatformSettings">IPlatformSettings</a></td>
<td>The <a href="T_Avalonia_Platform_IPlatformSettings">IPlatformSettings</a> interface represents a contract for accessing platform-specific settings and information. Some of these settings might be changed by used globally in the OS in runtime.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IPlatformThreadingInterface">IPlatformThreadingInterface</a></td>
<td>Provides platform-specific services relating to threading.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IPopupImpl">IPopupImpl</a></td>
<td>Defines a platform-specific popup window implementation.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IReadableBitmapImpl">IReadableBitmapImpl</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IReadableBitmapWithAlphaImpl">IReadableBitmapWithAlphaImpl</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IRenderTarget">IRenderTarget</a></td>
<td>Defines a render target</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IRenderTargetBitmapImpl">IRenderTargetBitmapImpl</a></td>
<td>Defines the platform-specific interface for a <a href="T_Avalonia_Media_Imaging_RenderTargetBitmap">RenderTargetBitmap</a>.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IRenderTargetWithProperties">IRenderTargetWithProperties</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IRuntimePlatform">IRuntimePlatform</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IScopedResource_1">IScopedResource(T)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IScreenImpl">IScreenImpl</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IStreamGeometryContextImpl">IStreamGeometryContextImpl</a></td>
<td>Describes a geometry using drawing commands.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IStreamGeometryImpl">IStreamGeometryImpl</a></td>
<td>Defines the platform-specific interface for a <a href="T_Avalonia_Media_StreamGeometry">StreamGeometry</a>.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_ISystemNavigationManagerImpl">ISystemNavigationManagerImpl</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_ITextShaperImpl">ITextShaperImpl</a></td>
<td>An abstraction that is used produce shaped text.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a></td>
<td>Defines a platform-specific top-level window implementation.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_ITransformedGeometryImpl">ITransformedGeometryImpl</a></td>
<td>Represents a geometry with a transform applied.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_ITrayIconImpl">ITrayIconImpl</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_ITrayIconWithIsTemplateImpl">ITrayIconWithIsTemplateImpl</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IWindowBaseImpl">IWindowBaseImpl</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IWindowIconImpl">IWindowIconImpl</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IWindowImpl">IWindowImpl</a></td>
<td>Defines a platform-specific window implementation.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IWindowingPlatform">IWindowingPlatform</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_IWriteableBitmapImpl">IWriteableBitmapImpl</a></td>
<td>Defines the platform-specific interface for a <a href="T_Avalonia_Media_Imaging_WriteableBitmap">WriteableBitmap</a>.</td>
</tr>
</table>

## Enumerations
<table>
<tr>
<td><a href="T_Avalonia_Platform_AlphaFormat">AlphaFormat</a></td>
<td>Describes how to interpret the alpha component of a pixel.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_ColorContrastPreference">ColorContrastPreference</a></td>
<td>System high contrast preference.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_ExtendClientAreaChromeHints">ExtendClientAreaChromeHints</a></td>
<td>Hint for Window Chrome when ClientArea is Extended.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_FormFactorType">FormFactorType</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_PlatformGraphicsExternalImageFormat">PlatformGraphicsExternalImageFormat</a></td>
<td> </td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_PlatformThemeVariant">PlatformThemeVariant</a></td>
<td>System theme variant or mode.</td>
</tr>
<tr>
<td><a href="T_Avalonia_Platform_ScreenOrientation">ScreenOrientation</a></td>
<td>Describes the orientation of a screen.</td>
</tr>
</table>